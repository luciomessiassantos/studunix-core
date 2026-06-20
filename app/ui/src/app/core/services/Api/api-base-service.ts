import { inject, signal, Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, throwError, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

export type RequestState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type RestrictedOptions = {
  headers?: HttpHeaders | Record<string, string | string[]> | undefined;
  context?: HttpContext;
  observe?: "body";
  params?: HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
  credentials?: RequestCredentials;
  keepalive?: boolean;

  redirect?: RequestRedirect;
  referrer?: string;
  integrity?: string;
  referrerPolicy?: ReferrerPolicy;
  transferCache?: {
      includeHeaders?: string[];
  } | boolean;
  timeout?: number;
}

@Injectable({
  providedIn: 'root'
})
export abstract class ApiBaseService<T> {
  private http = inject(HttpClient);
  
  // Estado interno reativo
  private state = signal<RequestState<T>>({
    data: null,
    loading: false,
    error: null,
  });



  // Expondo o estado como somente leitura
  public readonly state$ = this.state.asReadonly();

  protected fetchDataSimple(url: string, options?: RestrictedOptions): void {

    this.state.set({ data: null, loading: true, error: null });

    this.http.get<T>(url, options).pipe(
      retry(3), // tenta novamente 3 vezes em caso de erro
      catchError(this.handleError)
    ).subscribe({
      next: (data) => {
        this.state.set({ data, loading: false, error: null });
      },
      error: (err) => {
        this.state.set({ data: null, loading: false, error: err.message });
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    // Aqui você pode logar ou transformar a mensagem
    const message = error.error?.message || 'Erro desconhecido ao carregar dados.';
    return throwError(() => new Error(message));
  }

  // Método para recarregar manualmente (se precisar)
  protected reload(url: string, options?: any): void {
    this.fetchDataSimple(url, options);
  }
}