import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faYoutube , faFacebook , faTwitter , faLinkedin , faWhatsapp ,
   faSnapchat , faInstagram , faTiktok , faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faUser , faPhone , faEnvelope , faAddressBook } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nfc-page',
  templateUrl: './nfc-page.component.html',
  styleUrl: './nfc-page.component.css'
})
export class NfcPageComponent {

  //Mapping of icon names to FontAwesome icons
  iconMap: { [key : string]: IconDefinition} ={

    facebook : faFacebook,
    twitter : faTwitter,
    linkedin : faLinkedin,
    youtube : faYoutube,
    snapchat : faSnapchat,
    instagram : faInstagram,
    tiktok : faTiktok,
    google : faGoogle,
  }

  buttonMaps:{ [key: string] : IconDefinition}={
    whatsapp : faWhatsapp,
    addressBook :faAddressBook,
    phone : faPhone,
    envelope :faEnvelope,
  }

  faUser = faUser

  user = {
    name: 'Armor Tech',
    location: 'Dubai, United Arab Emirates',
    jobTitle: 'Software Engineer at Codemaze Pvt Ltd',
    profileImage: '/images/armorTech.jpeg',
  };

  buttons = [
    { label: 'Add to contact',  icon:'addressBook', color:' #1877F2' , functionName: 'downloadVCard'   },
    { label: 'WhatsApp', icon:'whatsapp',  color: ' #25D366' , functionName: 'openWhatsApp'  },
    { label: 'Email', icon:'envelope',  color:'  #D14836' , functionName: 'openEmail'   },
    { label: 'Call', icon:'phone',  color: ' #1DA1F2' , functionName: 'makeCall'  }
  ];


  //link the functionality behind the button
  handleButtonClick(functionName: string){

    const functionMap: Record<string , () => void> = {

      downloadVCard: this.downloadVCard.bind(this),
      openWhatsApp: this.openWhatsApp.bind(this),
    openEmail: this.openEmail.bind(this),
    makeCall: this.makeCall.bind(this)

    }
    if(functionMap[functionName]){
      functionMap[functionName]();
    }

  }


  openWhatsApp(){

    const phoneNumber = '971585189787';
    const msg = encodeURIComponent('+971 585 18 9787');
    const url = (`https://wa.me/${phoneNumber}?text=${msg}`)

    window.open(url, '_blank');

  }
  openEmail(){

    const email = 'armortechtrading@gmail.com';
    const subject = encodeURIComponent('Hello');
    const body = encodeURIComponent('Hello');
    const url = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = url;

  }
  makeCall(){

    const phoneNumber = '+971585189787';
    const url = `tel:${phoneNumber}`
    window.location.href = url;

  }

  downloadVCard(){

    const csvData = `BEGIN:VCARD
VERSION:3.0
FN:John Doe
TEL;TYPE=CELL:038872772828
EMAIL:example@gmail.com
END:VCARD`;

const blob =  new Blob ([csvData] , {type: 'text/vcard'});
const url = window.URL.createObjectURL(blob);

const a = document.createElement('a');
a.href = url;
a.download = 'contact.vcf';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

  }

  //dynamic data of icons
  socialLinks = [
    {name: 'facebook' , url:'https://facebook.com',color:' #1877F2'},
    {name: 'instagram' , url:'https://instagram.com',color:' #E1306C'},
    {name: 'youtube' , url:'https://youtube.com',color:' #FF0000'},
    {name: 'linkedin' , url:'https://linkedin.com',color:' #0077B5'},
    {name: 'tiktok' , url:'https://tiktok.com',color:' #000000'},
    {name: 'snapchat' , url:'https://www.snapchat.com',color:' #FFFC00'},
    {name: 'twitter' , url:'https://twitter.com',color:' #1DA1F2'},
    {name: 'google' , url:'https://www.google.com',color:' #DB4437'},

  ]

}
