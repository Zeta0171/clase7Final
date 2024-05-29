import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HospitalService } from '../services/hospital.service';
import { Hospital } from '../models/hospital';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HttpClient,HospitalService]
})
export class HomeComponent {


  displayedColumns: string[] = ['id', 'nombre', 'direccion','borrar'];
  hospitales: Hospital[] = [];
  constructor (private http:HttpClient, private service:HospitalService){

  }

  ngOnInit(){
    this.service.getHospitales().subscribe({
      next: (data) => {
        this.hospitales = data;
        //console.log(this.hospitales);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  borrarHospital(id:number){
    console.log(id);
    this.service.deleteHospital(id).subscribe({
      next: (data) => {
        this.hospitales = this.hospitales.filter(hospital => hospital.id !== id);
        console.log(data);
        
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
