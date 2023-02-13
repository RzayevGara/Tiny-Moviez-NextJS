import Movies from '@/components/dynamic/movies'

async function Index({params}) {

    const str = params.category.replace('-',' ')
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);

  return (
    
    <section className="main-content">
        <h2>{str2}</h2>
        <Movies/>
    </section>
  );
}

export default Index;
