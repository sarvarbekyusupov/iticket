import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";

async function start() {
  try {
    const PORT = process.env.PORT || 3030;
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());

    app.setGlobalPrefix("api");
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT);
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(
      `Swagger documentation available at http://localhost:${PORT}/api`
    );
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
}

start();
