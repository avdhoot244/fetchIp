import { Component, OnInit } from '@angular/core';
import { FetchService} from './fetch.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IP FETCHING';
  ip_address:string;
  constructor(private _fetchService: FetchService) { }
  ngOnInit(){
   
    }
    display():void{
      this._fetchService.getIp()
      .subscribe(resIpData =>alert(this.ip_address = resIpData.ip));
      
      
      }
        
    }
    

