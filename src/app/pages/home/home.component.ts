import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';

interface Idata{
  data: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private TestService: TestServiceService
  ) { 

  }

  async ngOnInit() {
    try {
      let data:Idata = await this.TestService.getUser()
      console.log(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  test3: string = 'helloooo'

  test : any= {
    test: 'test_obj'
  }

  test2s : any= [
    {
      test: 'test_obj1'
    },
    {
      test: 'test_obj2'
    },
    {
      test: 'test_obj3'
    }
  ]

  testFunc(p: any) {
    console.log('test_func')
  }


 
}
