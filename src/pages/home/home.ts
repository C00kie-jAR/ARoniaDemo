import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {

  }
  compilemsg():string{
    var msg = 'Sent from ARonia!' ;
    return msg;
  }
  regularShare(){
    var msg = this.compilemsg();
    this.socialSharing.share(msg, null, null, null);
  }
  cameraOpen(){
    let returnVal = window['Aronia'].openArActivity({}, function () {
      console.log('success');
    }, function () {
      console.log('fail');
    });
    console.log(returnVal);
  }

}
