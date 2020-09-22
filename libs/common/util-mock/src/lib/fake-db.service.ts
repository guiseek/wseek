import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { AcademyFakeDb } from './data/academy';
import { IconsFakeDb } from './data/icons';
import { ProfileFakeDb } from './data/profile';

@Injectable()
export class FakeDbService implements InMemoryDbService {
  constructor() {}
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {
      // Academy
      'academy-categories': AcademyFakeDb.categories,
      'academy-articles': AcademyFakeDb.articles,
      'academy-article': AcademyFakeDb.article,
      // Profile
      'profile-timeline': ProfileFakeDb.timeline,
      'profile-photos-videos': ProfileFakeDb.photosVideos,
      'profile-about': ProfileFakeDb.about,
      // Icons
      icons: IconsFakeDb.icons,
    };
  }
}
