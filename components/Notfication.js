import {Notifications , Permissions} from 'expo';

const pushNotification = async () =>{

    const { status:existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus ;

    if(existingStatus !== 'granted'){
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }
    if(finalStatus !== 'granted'){
        return;
    }
    let token = await Notifications.getExpoPushTokenAsync();

    console.log(token);

};

export default pushNotification ;
