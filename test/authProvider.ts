/*

import * as path from "path";
import * as assert from "assert";
import { suite, test, slow, timeout } from "mocha-typescript";
import {Inject} from "typescript-ioc";
import {Repository, Entity, FindOneOptions, Connection, SaveOptions} from "typeorm";

import {IUser, User, IUserSerialized} from "../src/models/entities/user";
import {UserFactory} from "../src/factories/user";
import {AuthProvider} from "../src/providers/auth";
import {UserProvider} from "../src/providers/user";
import {config} from "../src/config";
import {Logger} from "../src/util/logger";
import TestIoC from "../src/dependencyResolution/testIoC";
import {Fixture} from "./fixture";

const logger = Logger(path.basename(__filename));

@suite class AuthProviderTests {

  @Inject
  private userProvider!: UserProvider;
  @Inject
  private authProvider!: AuthProvider;

  @test async canCreateUserAndLogin() {

    let fixture = new Fixture();

    assert.equal(fixture.getRepoCalls, 1, "user provider constructor called getRepo");

    let myUser = await this.userProvider.create({
      ...{password: fixture.testUserPassword},
      ...fixture.testUser} as IUserSerialized);
    assert.equal(fixture.findCalls, 1, "user create calls repo find");
    assert.equal(fixture.saveCalls, 1, "user create calls repo save");

    const loginResult = await this.authProvider.login(myUser.username, fixture.testUserPassword);
    assert.equal(fixture.findCalls, 2, "user login calls repo find");
    assert.notEqual(loginResult, null, "new user can log in");

    await this.userProvider.delete(myUser);
  }  

  @test async canUpdateUser() {

    let fixture = new Fixture();

    assert.equal(fixture.getRepoCalls, 1, "user provider constructor called getRepo");

    let myUser = await this.userProvider.create({
      ...{password: fixture.testUserPassword},
      ...fixture.testUser} as IUserSerialized);
    assert.equal(fixture.findCalls, 1, "user create calls repo find");
    assert.equal(fixture.saveCalls, 1, "user create calls repo save");

    myUser.username = fixture.modifiedTestUser.username;
    myUser.email = fixture.modifiedTestUser.email;
    myUser.firstName = fixture.modifiedTestUser.firstName;
    myUser.lastName = fixture.modifiedTestUser.lastName;

    await this.userProvider.update({...{"password": ""},...myUser} as IUserSerialized);

    let myUpdatedUser = (await this.userProvider.getById(myUser.id)) as User;

    assert.equal(-1,myUpdatedUser.id);

    assert.equal(fixture.modifiedTestUser.username, myUpdatedUser.username, "updated username");
    assert.equal(fixture.modifiedTestUser.email, myUpdatedUser.email, "updated email");
    assert.equal(fixture.modifiedTestUser.firstName, myUpdatedUser.firstName, "updated firstName");
    assert.equal(fixture.modifiedTestUser.lastName, myUpdatedUser.lastName, "updated lastName");

    await this.userProvider.delete(myUpdatedUser);
  }
  
  @test async loginBadPassword() {
    
    let fixture = new Fixture();

    let myUser = await this.userProvider.create({
      ...{password: fixture.testUserPassword},
      ...fixture.testUser} as IUserSerialized);

    const loginResult2 = await this.authProvider.login(fixture.testUser.username, "");
    assert(!loginResult2, "new user can't login with wrong password");

    await this.userProvider.delete(myUser);
  }

  @test async loginBadUsername() {

    let fixture = new Fixture();

    const loginResult3 = await this.authProvider.login("", fixture.testUserPassword);
    assert(!loginResult3, "bad username can't login");
  }
}

*/
