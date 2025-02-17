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
    profileImage: '/public/images/armorTech.jpeg',
  };

  buttons = [
    { label: 'Add to contact',  icon:'addressBook', color:' #1877F2'    },
    { label: 'WhatsApp', icon:'whatsapp',  color: ' #25D366' },
    { label: 'Email', icon:'envelope',  color:'  #D14836'  },
    { label: 'Call', icon:'phone',  color: ' #1DA1F2' }
  ];

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
