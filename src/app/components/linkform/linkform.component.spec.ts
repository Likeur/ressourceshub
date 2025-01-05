import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkformComponent } from './linkform.component';

describe('LinkformComponent', () => {
  let component: LinkformComponent;
  let fixture: ComponentFixture<LinkformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
