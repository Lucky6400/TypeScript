// configManager.js

interface Config {
    apiUrl: string;
    apiKey: string;
}

export class ConfigManager {

    private static instance: ConfigManager;
    private config: Config;
    constructor() {
        if (ConfigManager.instance) {
            return ConfigManager.instance;
        }

        // Initialize default configuration
        this.config = {
            apiUrl: 'https://api.example.com',
            apiKey: 'your-api-key',
            // Other configuration parameters
        };

        // Mark this instance as the singleton instance
        ConfigManager.instance = this;
    }

    // Get a specific configuration value
    getConfig(key: string): string {
        return this.config[key];
    }

    // Set a configuration value
    setConfig(key: string, value: string): void {
        this.config[key] = value;
    }

    // Other methods related to configuration management

    // Example method to demonstrate singleton behavior
    logConfig(): void {
        console.log('Current Configuration:', this.config);
    }
}

// Usage
const configManagerInstance1 = new ConfigManager();
configManagerInstance1.logConfig();

// Trying to create another instance
const configManagerInstance2 = new ConfigManager();
configManagerInstance2.logConfig();

// Both instances point to the same object
console.log(configManagerInstance1 === configManagerInstance2);

