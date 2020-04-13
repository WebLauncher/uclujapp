import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sport } from '../types/sport';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsPage implements OnInit {
  sports$ = this.getSports();

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit() {
  }

  private getSports() {
    return this.db.collection<Sport>('sports', ref => ref.orderBy('order')).valueChanges({ idField: 'id' });
  }
}
