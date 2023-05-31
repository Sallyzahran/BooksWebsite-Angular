
import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {

  @Input() categoryNames !:Category
  @Output() emitFromChild = new EventEmitter()

 constructor (private router: Router, categoryService:CategoryService){}
    

  // emitToParent(id:number){

  //   /// this.router.navigate(['product-details',id])
  //   // this.emitFromChild.emit(_id)

  //   console.log(id)
  //   this.router.navigate(['app-category-books', id ])
  //  }
 

}
