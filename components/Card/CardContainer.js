import CardItem from './CardItem'


const CardContainer = ({projectData}) => {

  return (
    <>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {projectData.map(({description, imgUrl, name, seoTags, technologies}) => {
                
                return <CardItem projectDetail={{description, imgUrl, name, seoTags, technologies}}/>
              })}
               
            </div>

    </>
  );
};

export default CardContainer;