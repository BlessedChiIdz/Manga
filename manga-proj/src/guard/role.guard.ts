import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Roles } from "../decorator/roles.decorator";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector:Reflector){}
    canActivate(
        context: ExecutionContext,
      ): boolean | Promise<boolean> | Observable<boolean> {

        const roles = this.reflector.get<string[]>(Roles, context.getHandler()); 
        console.log(roles)
        if (!roles) {
          return true;
        }
        const request = context.switchToHttp().getRequest()
        const user = request.user;
        console.log(user)
        return true;
      }
}