import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatrimonyCategoryDetailsPage } from './matrimony-category-details.page';

describe('MatrimonyCategoryDetailsPage', () => {
  let component: MatrimonyCategoryDetailsPage;
  let fixture: ComponentFixture<MatrimonyCategoryDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonyCategoryDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatrimonyCategoryDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
