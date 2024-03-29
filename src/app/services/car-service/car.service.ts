import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../models/car-model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiCarsServerUrl = 'http://localhost:8080/api/cars';

  constructor(
    private http: HttpClient
    ) { }

    getAllCars(): Observable<Car[]> {
      return this.http.get<Car[]>(`${this.apiCarsServerUrl}/getAllCars`);
    }

    getAllCarsByMake(make: string): Observable<Car[]> {
      return this.http.get<Car[]>(`${this.apiCarsServerUrl}/getAllCarsByMake/${make}`);
    }

    getCarById(carId: number): Observable<Car> {
      return this.http.get<Car>(`${this.apiCarsServerUrl}/getCar/${carId}`);
    }

    createCar(car: Car): Observable<Car> {
      return this.http.post<Car>(`${this.apiCarsServerUrl}/createCar`, car);
    }

    updateCar(car: Car): Observable<Car> {
      return this.http.put<Car>(`${this.apiCarsServerUrl}/updateCar`, car);
    }
}
