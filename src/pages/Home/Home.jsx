import money from '../../assets/img/icon-money.png';
import chat from '../../assets/img/icon-chat.png';
import security from '../../assets/img/icon-security.png';
import HomeCard from '../../_components/HomeCard';
import './Home.css';


const Home_CARD_DATA = [
  {
    logo: money,
    title: 'More savings means higher rates',
    description: 'The more you save with us, the higher your interest rate will be!'
  },
  {
    logo: chat,
    title: 'You are our #1 priority',
    description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
  },
  {
    logo: security,
    title: 'Security you can trust',
    description: 'We use top of the line encryption to make sure your data and money is always safe.'
  }
];

function Home() {
  return (
      <>
        <main>
          <div className="hero">
            <section className="hero-content">
              <h2 className="sr-only">Promoted Content</h2>
              <p className="subtitle">No fees.</p>
              <p className="subtitle">No minimum deposit.</p>
              <p className="subtitle">High interest rates.</p>
              <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
          </div>
          <section className="features">
            { Home_CARD_DATA.map(({ logo, title, description }, index) => (
                <HomeCard
                    key={ `account-card-${ index }` }
                    logo={ logo }
                    title={ title }
                    description={ description }
                />))
            }
          </section>
        </main>
      </>
  );
}

export default Home;
