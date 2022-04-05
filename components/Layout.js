import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className='page-holder'>
      <Navbar />
      <div className='main'>{children}</div>
      <Footer />
      <style jsx>{`
        .page-holder {
          display: flex;
          flex-direction: column;
        }
        .main {
          flex-grow: 1;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        `}</style>
    </div>
  );
}
