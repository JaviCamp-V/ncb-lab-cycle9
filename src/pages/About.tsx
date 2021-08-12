import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
        <img src="https://i.pinimg.com/280x280_RS/8e/72/ff/8e72ff109867d964f3348468fc6d17f0.jpg" />
        <IonCardHeader>
            <IonCardTitle>Javian Campbell</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam, iure praesentium vel ipsum iusto nihil quibusdam. Dolore iusto quam, error unde pariatur eveniet, placeat molestias possimus, fugit asperiores est ipsam accusamus obcaecati inventore eos voluptates odit fuga iure nemo et! Minima eligendi nobis alias itaque architecto consectetur unde laudantium!
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
