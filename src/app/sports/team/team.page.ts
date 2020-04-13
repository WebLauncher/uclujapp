import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/types/team';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamPage implements OnInit {
  team$: Observable<Team>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.team$ = this.route.params.pipe(switchMap(params => this.db.doc<Team>(`teams/${params.teamId}`).valueChanges()));
  }

}
