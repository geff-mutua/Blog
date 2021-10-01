import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRespository:Repository<UserEntity>
    ){}

    create(user :User) : Observable<User>{
        return from(this.userRespository.save(user));;
    }

    findOne(id:number): Observable<User>{
        return from(this.userRespository.findOne(id));
    }

    findAll(): Observable<User[]>{
        return from(this.userRespository.find());
    }

    deleteOne(id: number): Observable<any>{
        return from(this.userRespository.delete(id));
    }

    updateOne(id: number,user:User): Observable<any>{
        return from(this.userRespository.update(id,user));
    }
}
