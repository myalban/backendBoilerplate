/*

import * as TypeMoq from "typemoq";

import {IUser, User, IUserSerialized} from "../src/models/entities/user";
import {UserFactory} from "../src/factories/user";
import {Repository, Entity, FindOneOptions, Connection, SaveOptions} from "typeorm";

export class Fixture {
    public readonly testUser: User = {
      id: -1, 
      username: "testuser", 
      email: "email@mail.com",
      firstName: "jane",
      lastName: "doe",
      passwordHash: "",
      groups: [],
      ownedGroups: [],
      contacts:[],
      hasId: () => true,
      save: () => Promise.resolve(this.testUser),
      remove: () => Promise.resolve(this.testUser),
      verifyPassword: (password: string) => new Promise((res,rej)=> res(password === this.testUserPassword)),
      updatePassword: () => new Promise((res,rej)=> res())
    };

    public readonly modifiedTestUser: User = {
      id: -1, 
      username: "testuser2", 
      email: "email2@mail.com",
      firstName: "jane2",
      lastName: "doe2",
      passwordHash: "",
      groups: [],
      ownedGroups: [],
      contacts: [],
      hasId: () => true,
      save: () => Promise.resolve(this.modifiedTestUser),
      remove: () => Promise.resolve(this.modifiedTestUser),
      verifyPassword: (password: string) => new Promise((res,rej)=> res(password === this.testUserPassword)),
      updatePassword: () => new Promise((res,rej)=> res())
    };

    //this variable is our underlying mock datastore capable of holding records in a simple array
    public testRepositoryUsers: User[] | undefined = undefined;
    public findCalls = 0;
    public saveCalls = 0;
    public getRepoCalls = 0;
    public connection: Connection;
    public userRepository: Repository<User>;
    public userFactory: UserFactory;
    public testUserPassword: string = "password";

    public constructor() {

        let userFactoryMock = TypeMoq.Mock.ofType<UserFactory>();
        userFactoryMock.setup((x: UserFactory) => x.Create)
          .returns(() => (userData: IUserSerialized) => Promise.resolve(this.testUser));
        this.userFactory = userFactoryMock.object;
        
        var findOneResult = (options?: any) => {
          this.findCalls++;
          if(this.testRepositoryUsers && this.testRepositoryUsers.length > 0) {
            return Promise.resolve((this.testRepositoryUsers as User[])[0])
          } else {
            return Promise.resolve(undefined);
          }
        };
        let userRepositoryMock = TypeMoq.Mock.ofType<Repository<User>>();
        userRepositoryMock.setup((x: Repository<User>) => x.findOne)
          .returns((conditions?: any | undefined) => {
            return findOneResult;
          });
        userRepositoryMock.setup((x: Repository<User>) => x.findOneById)
          .returns((id: number) => {
            return findOneResult;
          });

        let saveResult = (entities: User[], options?: SaveOptions | undefined) => {
          this.saveCalls++;
          if(!this.testRepositoryUsers){
            //the method signature says entities is a User[],
            //but an overload allows a single User. Check for the difference
            if(Array.isArray(entities)){
              this.testRepositoryUsers = new Array();
              this.testRepositoryUsers.concat(entities);
            } else {
              this.testRepositoryUsers = new Array();
              this.testRepositoryUsers.push(entities);
            }
          } else {
            this.testRepositoryUsers.concat(entities);
          }
          return Promise.resolve(this.testRepositoryUsers as User[])
        }
        userRepositoryMock.setup((x: Repository<User>) => x.save)
          .returns((testUsers: User[]) => {
            this.testRepositoryUsers = testUsers;
            return saveResult;
          });
        this.userRepository = userRepositoryMock.object;
    
        let connectionMock = TypeMoq.Mock.ofType<Connection>();
        connectionMock.setup(x => x.getRepository(User))
          .returns((target: any) => {
            this.getRepoCalls++;
            return this.userRepository;
          });
        this.connection = connectionMock.object;
    }
}

*/
