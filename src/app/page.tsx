import Intro from '@/components/page-components/intro';
import About from '@/components/page-components/about';

export default function Home() {
  return (
    <main className="p-1">
      <Intro />
      <About />
    </main>
  );
}
