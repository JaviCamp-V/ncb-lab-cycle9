import { IonHeader, IonPage, IonTitle, IonToolbar,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Programmes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Programmes</IonTitle>
        </IonToolbar>

          Menu
          <a href="/home"> Home </a> 
          <a href="/about"> About </a>
          <a href="/programmes"> Programmes </a>

      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Undergraduate Programmes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
      <IonItem>
        <IonLabel>BSc. General</IonLabel>
        <IonList>
            <IonItem>
            <IonLabel>Minor in Information TechnologyComputer Science Major </IonLabel>
            </IonItem>
            <IonItem>
            <IonLabel> Software Engineering Major</IonLabel>              
            </IonItem>
        </IonList>
      </IonItem>
      <IonItem>
        <IonLabel>BSc Information Technology </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>BSc Computer Studies Option</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>BSc. Software Engineering (Mobile Application Technologies)</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Minors are Offered as Follows:</IonLabel>
        <IonList>
            <IonItem>                    
                    <IonLabel>1. Minor in Computer Science  </IonLabel>
            </IonItem>
            <IonItem>                    
                    <IonLabel>2. Minor in Software Engineering</IonLabel>
            </IonItem>
            <IonItem>                    

                    <IonLabel>3. Minor in Information Technology</IonLabel>
            </IonItem>
        </IonList>

      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Programmes;
