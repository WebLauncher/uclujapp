import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Sport } from 'src/app/types/sport';
import { switchMap, tap, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsPage implements OnInit {
  sport$: Observable<Sport>;
  teams$: Observable<Team[]>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.sport$ = this.route.params.pipe(switchMap(params => this.db.doc<Sport>(`sports/${params.sportId}`).valueChanges()));
    this.teams$ = this.route.params.pipe(
      switchMap(params => this.db.collection<Team>('teams', ref => ref.where('sport', '==', params.sportId)).valueChanges({ idField: 'id' }))
    );
  }
}
