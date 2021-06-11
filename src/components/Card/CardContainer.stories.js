import CardContainer from "./CardContainer";

const CardConatinerStoryProps = {
  description: "TEST DESCRIPTION",
  imgUrl: "https://ramonchavez.site/wp-content/uploads/2020/07/crear-una-app.png",
  name: `TEST: ${Math.floor(Math.random() * 4)}`,
  seoTags: ["1","2","3"],
  technologies: ["Java","Preact","Typescript"],
};

const Template = (props) => <CardContainer {...props} />;


// Here we export a variant of the default template passing props
export const CardContainerStory = Template.bind({});
CardContainerStory.args = {
projectData:[CardConatinerStoryProps,CardConatinerStoryProps,CardConatinerStoryProps]
};


export default {
  title: 'Card/Card Container',
  component: CardContainer,
}