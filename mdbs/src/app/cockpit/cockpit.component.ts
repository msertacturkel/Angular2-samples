import {AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements AfterViewInit {
  @ViewChildren('pages') pages: QueryList<ElementRef>;



  allPosts = [
    {id: 1, name: 'JOB 1', title: 'Post 1'},
    {id: 2, name: 'JOB 2', title: 'Post 2'},
    {id: 3, name: 'JOB 3', title: 'Post 3'},
    {id: 4, name: 'JOB 4', title: 'Post 4'},
    {id: 5, name: 'JOB 5', title: 'Post 5'},
    {id: 6, name: 'JOB 6', title: 'Post 6'},
    {id: 7, name: 'JOB 7', title: 'Post 7'},
    {id: 8, name: 'JOB 8', title: 'Post 8'},
    {id: 9, name: 'JOB 9', title: 'Post 9'},
    {id: 10, name: 'JOB 10', title: 'Post 10'},
    {id: 11, name: 'JOB 11', title: 'Post 11'},
    {id: 12, name: 'JOB 12', title: 'Post 12'}
  ];

  activePage = 1;
  pageCount: Array<any> = [1, 2, 3, 4, 5];
  first = 1;
  last = 4;

  @HostListener('click', ['$event']) onclick(event: any) {
    if (event.target.parentElement.innerText >= 1 || event.target.parentElement.innerText <= 3) {
      (this.activePage as number) = +event.target.parentElement.innerText;
      this.clearActive();
      this.renderer.addClass(event.target.parentElement, 'active');
    }
    this.first = +this.activePage * 4 - 4 + 1;
    this.last = +this.activePage * 4;
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.clearActive();
    this.renderer.addClass(this.pages.first.nativeElement, 'active');
    this.activePage = 1;
    this.first = +this.activePage * 4 - 4 + 1;
    this.last = +this.activePage * 4;
  }

  clearActive() {
    this.pages.forEach(element => {
      this.renderer.removeClass(element.nativeElement, 'active');
    });
  }

  firstPage() {
    this.clearActive();
    const firstPage = this.pages.first.nativeElement;
    console.log(firstPage);
    (this.activePage as number) = +firstPage.innerText;
    this.clearActive();
    this.renderer.addClass(firstPage, 'active');

    this.first = +this.activePage * 4 - 4 + 1;
    this.last = +this.activePage * 4;
  }

  lastPage() {
    this.clearActive();
    const lastPage = this.pages.last.nativeElement;
    (this.activePage as number) = +lastPage.innerText;
    this.clearActive();
    this.renderer.addClass(lastPage, 'active');

    this.first = +this.activePage * 4 - 4 + 1;
    this.last = +this.activePage * 4;
  }

}
