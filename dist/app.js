import { packd_export_0 } from 'https://srv.divriots.com/packd/lwc@2.4.0';const { LightningElement } = packd_export_0;;
export default class App extends LightningElement {
  constructor(...args) {
    super(...args);
    this.name = 'Electra X4';
    this.description = 'A sweet bike built for comfort.';
    this.category = 'Mountain';
    this.material = 'Steel';
    this.price = '$2,700';
    this.pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
  }

}