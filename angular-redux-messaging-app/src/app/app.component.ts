import { Component, Inject, OnInit } from '@angular/core';
import { AppStore } from './redux/store';
import { Store } from 'redux';
import { AppState } from './redux/state';
import * as MessagesActions from './redux/actions';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-redux-messaging-app';

  messages: string[];

  message = new FormControl('');
  index = new FormControl(0);


  constructor(@Inject(AppStore) public store: Store<AppState>) {
    store.subscribe(() => this.readState()); // This will be fired only when dispatch will be executed.
    this.readState();
  }

  ngOnInit() {
  }


  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.messages = state.messages;
    console.log('AppState: ', JSON.stringify(state));
  }

  addMessage(message: string): void {
    this.store.dispatch(MessagesActions.addMessageAction(message));
  }

  deleteMessage(index: number): void {
    this.store.dispatch(MessagesActions.deleteMessageAction(index));
  }

}
