import {attribute, autoGeneratedHashKey, table} from "@aws/dynamodb-data-mapper-annotations";
import "dotenv/config";

// dotenv.config();

@table("serverless-aws-starter-dev-todos")
export class ToDoModel {

  @autoGeneratedHashKey()
  public id: string;

  @attribute()
  public createdAt: string;

  @attribute()
  public updatedAt: string;

  @attribute()
  public text: string;

  @attribute()
  public duedate: string;

}