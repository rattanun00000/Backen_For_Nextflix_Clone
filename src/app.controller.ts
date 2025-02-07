import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Welcome')
@Controller()
export class AppController {
    @Get()
    @ApiOperation({ 
        summary: 'Get welcome message',
        description: 'Returns a welcome message for the Netflix Clone Service API'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Welcome message',
        schema: {
            type: 'string',
            example: 'Welcome to Nextflix Clone Service API'
        }
    })
    getWelcomeMessage(): string {
        return 'Welcome to Nextflix Clone Service API';
    }
}