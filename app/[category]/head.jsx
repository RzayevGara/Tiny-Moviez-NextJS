export default async function Head({ params }) {  
    const str = params.category.replace('-',' ')
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return (
      <>
        <title>{str2}</title>
      </>
    )
  }