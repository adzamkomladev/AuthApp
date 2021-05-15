import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>
    ) {}

    async getOrCreate(currentUser): Promise<User> {
       const user = await this.userRepository.findOne({email: currentUser.email});

       if (user) {
           return user;
       }

       const userCreated = this.userRepository.create({
        email: currentUser.email,
        name: currentUser.name,
        avatar: currentUser.picture,
        authId: currentUser.user_id,
        provider: 'google'
       });

       return this.userRepository.save(userCreated);
    }
}
