// // Start Interface
import { PlatformViewsSettings } from '@tsed/platform-views';
import { ConnectionOptions } from 'typeorm';

export type ApplicationConfig = Partial<TsED.Configuration> & {
    redis: RedisConfig,
    rdbms: MainConnectionOptions,
    security: SecurityConfig,
    views?: PlatformViewsSettings,
    smtp?: SmtpConfig,
    props: {
        [key: string]: any;
    };
}

// export interface ApplicationConfig extends Partial<IDIConfigurationOptions> {
//     rootDir: string;
//     profile: ProfileTypes;
//     /**
//      * Port number for the [HTTP.Server](https://nodejs.org/api/http.html#http_class_http_server).
//      */
//     port?: string | number;
//     /**
//      * Port number for the [HTTP.Server](https://nodejs.org/api/http.html#http_class_http_server).
//      */
//     httpPort?: string | number | boolean;
//     /**
//      * Port number for the [HTTPs.Server](https://nodejs.org/api/https.html#https_class_https_server).
//      */
//     httpsPort?: string | number | boolean;
//     /**
//      * [Https.ServerOptions](https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener)):
//      * - `key` &lt;string&gt; | &lt;string[]&gt; | [&lt;Buffer&gt;](https://nodejs.org/api/buffer.html#buffer_class_buffer) | &lt;Object[]&gt;: The private key of the server in PEM format. To support multiple keys using different algorithms an array can be provided either as a plain array of key strings or an array of objects in the format `{pem: key, passphrase: passphrase}`. This option is required for ciphers that make use of private keys.
//      * - `passphrase` &lt;string&gt; A string containing the passphrase for the private key or pfx.
//      * - `cert` &lt;string&gt; | &lt;string[]&gt; | [&lt;Buffer&gt;](https://nodejs.org/api/buffer.html#buffer_class_buffer) | [&lt;Buffer[]&gt;](https://nodejs.org/api/buffer.html#buffer_class_buffer): A string, Buffer, array of strings, or array of Buffers containing the certificate key of the server in PEM format. (Required)
//      * - `ca` &lt;string&gt; | &lt;string[]&gt; | [&lt;Buffer&gt;](https://nodejs.org/api/buffer.html#buffer_class_buffer) | [&lt;Buffer[]&gt;](https://nodejs.org/api/buffer.html#buffer_class_buffer): A string, Buffer, array of strings, or array of Buffers of trusted certificates in PEM format. If this is omitted several well known "root" CAs (like VeriSign) will be used. These are used to authorize connections.
//      */
//     httpsOptions?: Https.ServerOptions;
//     /**
//      * Mount all controllers under a directories to an endpoint.
//      */
//     mount: EndpointDirectoriesSettings;
//     /**
//      * List of directories to scan [Services](/docs/components.md), [Middlewares](/docs/middlewares.md) or [Converters](/docs/converters.md).
//      */
//     componentsScan: (string | RegExp)[];
//     /**
//      * List of glob patterns. Exclude all files which matching with this list when Server scan all components with the `mount` or `scanComponents` options.
//      */
//     exclude?: string[];
//     /**
//      * Configure the mimes accepted by default by the server.
//      */
//     acceptMimes?: string[];
//     /**
//      * Enable debug mode. By default debug is false.
//      */
//     debug?: boolean;
//     /**
//      * Converter configuration.
//      */
//     converter?: Partial<ConverterSettings>;
//     /**
//      * Logger configuration.
//      */
//     logger?: Partial<PlatformLoggerSettings>;
//     /**
//      * Object to mount all directories under to his endpoints. See more on [Serve Static](/tutorials/serve-static-files.md).
//      */
//     statics?: PlatformStaticsSettings;
//     /**
//      * Object configure Multer. See more on [Upload file](/tutorials/serve-static-files.md).
//      */
//     multer?: PlatformMulterSettings;
//     /**
//      * Object to configure Views engines with Consolidate. See more on [View engine](/docs/template-engine.md).
//      */
//     views?: PlatformViewsSettings;
//     /**
//      * A list of response filters must be called before returning a response to the consumer. See more on [Response filters](/docs/response-filter.md).
//      */
//     responseFilters: Type<ResponseFilterMethods>[];
//     /**
//      * Seq logger config
//      */
//     seq: { url: string };
//
//     // Custom
//     rdbms: MainConnectionOptions;
//
//     typeorm: ConnectionOptions[];
//
//     redis?: RedisConfig;
//
//     security: SecurityConfig;
//
//     cache: CacheConfig;
//
//     payloadLimit?: string;
//
//     smtp?: SmtpConfig;
//
//     tunnels?: TunnelConfig[];
//
//     props: {
//         [key: string]: any; // InterfaceA | InterfaceB
//     };
// }
//

export type MainConnectionOptions = {
    name: 'default';
} & ConnectionOptions;

export interface RedisConfig {
    host: string;
    port: number;
    prefix: string;
}

export interface EncryptionConfig {
    salt: string;
    algorithm: string;
    ivLength?: number;
}

// export interface CacheConfig {
//     prefix?: string;
//     stores?: {
//         [key: string]: {
//             ttl: number;
//         };
//     };
// }
//
export interface SecurityConfig {
    passport?: JwtConfig | SessionConfig;
    encryption: EncryptionConfig;
}

export interface PassportConfig {
    usernameField: string;
    passwordField: string;
}

export interface JwtConfig extends PassportConfig {
    type: 'jwt';
    jwtType: 'JWT' | 'JWE';
    algorithm: string;
    secret?: any;
    tokenLife?: number;
    refreshTokenSecret?: any;
    refreshTokenLife?: number;
    issuer?: string;
    audience?: string;
    refreshTokenFieldName: string;
}

export interface SessionConfig extends PassportConfig {
    type: 'session';
    useRedis?: boolean;
    prefix?: string;
    secret?: string;
}

// ref. https://nodemailer.com/about/
export interface SmtpConfig {
    transport: {
        host: string;
        port: number;
        secure: boolean;
        auth: {
            user: string, // generated ethereal user
            pass: string, // generated ethereal password
        },
    },
    defaultOption: {
        from: string,
        skip: boolean
    },
    templateDir: string
}
