import {
    IonButton,
    IonButtons,
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
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
  
  const CustomerEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string; }>();
    const [customer,setCustomer] = useState<any>({});
    const history = useHistory();
  
    useEffect(()=>{search();},[]);
  
    const search = () => 
    {
        //   let result = searchCustomers();
        //   setClientes(result);
    }

    const save = () => 
    {
       customer.id = Math.round(Math.random() * 100000);
       saveCustomer(customer);
       history.push('/folder/customers')
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
            <IonTitle> {id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>

            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonInput onIonChange={e=> customer.firstname = e.detail.value} 
                        label="Nombre" labelPlacement="stacked" placeholder="Nombre" value={customer.firstname}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonInput onIonChange={e=> customer.lastname = e.detail.value} 
                        label="Apellido" labelPlacement="stacked" placeholder="Enter text" value={customer.lastname}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonInput onIonChange={e=> customer.email = e.detail.value} 
                        label="Email" labelPlacement="stacked" placeholder="Enter text" value={customer.email}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonInput onIonChange={e=> customer.address = e.detail.value}  
                        label="Direccion" labelPlacement="stacked" placeholder="Enter text" value={customer.address}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonInput onIonChange={e=> customer.phone = e.detail.value} 
                        label="Telefono" labelPlacement="stacked" placeholder="Enter text" value={customer.phone}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            

            <IonItem>
              <IonButton onClick={save} color="success" slot="end">
                <IonIcon icon={add} />
                Guardar
              </IonButton>
            </IonItem>
            
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default CustomerEdit;
  