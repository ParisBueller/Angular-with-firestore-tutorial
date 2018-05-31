import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

const firestoreConfig = {
  apiKey: "AIzaSyDZka7b1ciMPFlgeuQkaIbu2j5_xCfNBi4",
  authDomain: "firestore-tutorial-60649.firebaseapp.com",
  databaseURL: "https://firestore-tutorial-60649.firebaseio.com",
  projectId: "firestore-tutorial-60649",
  storageBucket: "firestore-tutorial-60649.appspot.com",
  messagingSenderId: "790963609161"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firestoreConfig),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
