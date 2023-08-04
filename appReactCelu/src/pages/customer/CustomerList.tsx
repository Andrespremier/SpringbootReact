import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import { add } from "ionicons/icons";
import { useEffect, useState } from "react";

const CustomerList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [clientes,setClientes] = useState<any>([]);

  useEffect(()=>{search();},[]);

  const search = () => 
  {
        const datosDeEjemplo = [{
            id: '1',
            firstname: 'nombreEjemplo',
            lastname: 'apellidoEjem',
            email: 'bla@falso.com',
            phone:'34523445',
            address:'direccionEjemplo'
        },
        {
            id: '2',
            firstname: 'nombreEjemplo2',
            lastname: 'apellidoEjem2',
            email: 'bla2@falso.com',
            phone:'345234452',
            address:'direccionEjemplo2'
        }]
        setClientes(datosDeEjemplo);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonTitle> Clientes </IonTitle>
          <IonItem>
            <IonButton slot="end">
              <IonIcon icon={add} />
              agregar cliente
            </IonButton>
          </IonItem>
          <IonGrid className="table">
            
            {clientes.map((cliente:any) =>
                <IonRow>
                <IonCol>{cliente.firstname}</IonCol>
                <IonCol>{cliente.email}</IonCol>
                <IonCol>{cliente.phone}</IonCol>
                <IonCol>{cliente.address}</IonCol>
                <IonCol>Accion</IonCol>
              </IonRow>
                )}
        
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
