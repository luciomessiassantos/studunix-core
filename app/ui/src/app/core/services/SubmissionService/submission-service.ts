import { Injectable } from '@angular/core';
import { BaseApiService } from '../BaseApiService/base-api-service';
import { Submission } from '~/features/desktop/professor/shared/types.dto';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService extends BaseApiService {

  getSubmissionsByAssignmentId(assignmentId: string) {
    return this.client.get<Submission[]>(
      `${this.baseUrl}/submissions`,
      {
        params: {
          assignmentId: assignmentId,
          _embed: 'student'
        }
      }
    );
  }

  getSubmissionsByStudentId(studentId: string) {
    return this.client.get<Submission[]>(
      `${this.baseUrl}/submissions`, {
        params: {
          studentId: studentId
        }
      }
    )
  }

}
