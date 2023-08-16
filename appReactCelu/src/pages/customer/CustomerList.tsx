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
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import { add, close, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { removeCustomer, saveCustomer, searchCustomers } from "./CustomerApi";
import Customer from "./Customer";

const CustomerList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [clientes,setClientes] = useState<Customer[]>([]);
  const history = useHistory();

  useEffect(()=>{search();},[history.location.pathname]);

  const search = () => 
  {
        let result = searchCustomers();
        setClientes(result);
  }

  const remove = (id: string) => 
  {
    removeCustomer(id)
    search();
  }

  // //const pruebaLocalStorage = () => 
  // {
  //     const ejemplo = [{
  //       id: '1',
  //       firstname: 'nombreEjemplo',
  //       lastname: 'apellidoEjem',
  //       email: 'bla@falso.com',
  //       phone:'34523445',
  //       address:'direccionEjemplo'
  //   }]
  //   //saveCustomer(ejemplo);
  // }

  const addCustomer = () => 
  {
    history.push('/folder/customer/new');
  } 

  const editCustomer = (id:string) => 
  {
    history.push('/folder/customer/' + id);
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
            <IonButton slot="end" onClick={addCustomer}>
              <IonIcon icon={add} />
              agregar cliente
            </IonButton>
          </IonItem>
          <IonGrid className="table">
            
          <IonRow>
                <IonCol>id</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Apellido</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Direccion</IonCol>
                <IonCol>Accion</IonCol>
              </IonRow>

            {clientes.map((cliente:Customer) =>
                <IonRow>
                <IonCol>{cliente.id}</IonCol>
                <IonCol>{cliente.firstname}</IonCol>
                <IonCol>{cliente.lastname}</IonCol>
                <IonCol>{cliente.email}</IonCol>
                <IonCol>{cliente.phone}</IonCol>
                <IonCol>{cliente.address}</IonCol>
                <IonCol>
                    <IonButton color="primary" onClick={() => editCustomer(cliente.id)}>
                        <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>
                    <IonButton color="danger" onClick={() => remove(cliente.id)}>
                        <IonIcon icon={close} slot="icon-only" />
                    </IonButton>
                </IonCol>
              </IonRow>
                )}
        
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
