import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideChatlistComponent } from './leftside-chatlist.component';

describe('LeftsideChatlistComponent', () => {
  let component: LeftsideChatlistComponent;
  let fixture: ComponentFixture<LeftsideChatlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftsideChatlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideChatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
