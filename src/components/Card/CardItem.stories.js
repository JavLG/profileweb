import CardItem from "./CardItem";

const CardItemStoryProps = {
  description: "",
  imgUrl: "",
  name: "",
  seoTags: "",
  technologies: "",
};

const Template = (props) => <CardItem {...props} />;


// Here we export a variant of the default template passing props
export const CardItemStory = Template.bind({});
CardItemStory.args = {
  projectDetail:{
  description: "Primer proyecto Card",
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/768px-Video-Game-Controller-Icon-IDV-green.svg.png",
  name: "VideoGame",
  seoTags: ["C#","Unity","Gaming","Framework"],
  technologies: ["C#","iOS","Swift","Android"],
  }
};


export default {
  title: 'Card/Card Item',
  component: CardItem,
}