import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '~/core/enviroment';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  
  protected baseUrl = environment.apiUrl;

  client = inject(HttpClient);


}
