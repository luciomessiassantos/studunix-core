import { Injectable } from '@angular/core';
import { BaseApiService } from '../BaseApiService/base-api-service';
import { map } from 'rxjs';
import { AssignmentProfessor } from '~/features/professor/shared/types.dto';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService extends BaseApiService {
  
getAssignments() {
  return this.client.get<AssignmentProfessor[]>(
    `${this.baseUrl}/assignments`
  );
}

}
