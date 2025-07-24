import Card from './components/Card';
import nature from './assets/nature.jfif';
import techtrens from './assets/techtrens.jfif';
import cj from './assets/cj.jfif';

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Explore Nature"
          description="Enjoy the scenic beauty and tranquility of nature."
          imageUrl={nature}
          buttonText="Learn More"  />
        <Card
          title="Tech Trends"
          description="Stay updated with the latest in tech and innovation."
          imageUrl={techtrens}
          buttonText="Explore"
        />
        <Card
          title="Coding Journey"
          description="Boost your skills with practical programming tips."
          imageUrl={cj}
          buttonText="Read More"
        />
      </div>
    </div>
  );
}

export default App;
