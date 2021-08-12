import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList, IonItem, IonLabel,  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonHeader>
           Menu
        </IonHeader>
        <IonList>
          <IonItem> <IonLabel>Menu</IonLabel></IonItem>
          <IonItem><IonLabel> <a href="/home"> Home </a> </IonLabel></IonItem>
          <IonItem> <IonLabel><a href="/about"> About </a> </IonLabel></IonItem>
          <IonItem> <IonLabel><a href="/programmes"> Programmes </a></IonLabel></IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
