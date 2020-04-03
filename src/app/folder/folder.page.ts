import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Sport } from '../types/sport';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderPage implements OnInit {
  public folder: string;

  sports$ = this.getSports();

  constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getSports() {
    return this.firestore.collection<Sport>('sports').valueChanges();
  }
}
