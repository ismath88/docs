webpackJsonp([0x7733ec7aff49],{478:function(i,t){i.exports={data:{docsYaml:{chapters:[{title:"The Distribution: Create Powerful APIs with Ease",path:"distribution",items:[{title:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",id:"index",anchors:[{id:"installing-the-framework",title:"Installing the Framework"},{id:"its-ready",title:"It's Ready!"},{id:"bringing-your-own-model",title:"Bringing your Own Model"},{id:"validating-data",title:"Validating Data"},{id:"adding-graphql-support",title:"Adding GraphQL Support"},{id:"the-admin",title:"The Admin"},{id:"a-reactredux-progressive-web-app",title:"A React/Redux Progressive Web App"},{id:"other-features",title:"Other Features"}]},{title:"Testing and Specifying the API",id:"testing",anchors:[{id:"running-unit-tests-with-phpunit",title:"Running Unit Tests with PHPUnit"}]},{title:"Debugging",id:"debugging",anchors:[{id:"add-a-development-stage-to-the-dockerfile",title:"Add a Development Stage to the Dockerfile"},{id:"configure-xdebug-with-docker-compose-override",title:"Configure Xdebug with Docker Compose Override"},{id:"troubleshooting",title:"Troubleshooting"}]}]},{title:"The API Component",path:"core",items:[{title:"The API Platform Core Library",id:"index",anchors:[{id:"features",title:"Features"},{id:"other-resources",title:"Other resources"}]},{title:"Getting started",id:"getting-started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{title:"General Design Considerations",id:"design",anchors:null},{title:"Configuration",id:"configuration",anchors:null},{title:"Operations",id:"operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{title:"Overriding Default Order",id:"default-order",anchors:null},{title:"Filters",id:"filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{title:"The Serialization Process",id:"serialization",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-serialization-groups-per-operation",title:"Using Serialization Groups per Operation"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per-item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-adding-extra-data",title:"Decorating a Serializer and Adding Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{title:"Validation",id:"validation",anchors:[{id:"validating-submitted-data",title:"Validating Submitted Data"},{id:"using-validation-groups",title:"Using Validation Groups"},{id:"using-validation-groups-on-operations",title:"Using Validation Groups on Operations"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{title:"Errors Handling",id:"errors",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{title:"Pagination",id:"pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"},{id:"changing-maximum-items-per-page",title:"Changing Maximum items per page"},{id:"partial-pagination",title:"Partial Pagination"},{id:"avoiding-double-sql-requests-on-doctrine",title:"Avoiding double SQL requests on Doctrine"}]},{title:"The Event System",id:"events",anchors:null},{title:"Content Negotiation",id:"content-negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"enabling-additional-formats-on-a-specific-resourceoperation",title:"Enabling Additional Formats On a Specific Resource/Operation"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{title:"Using External Vocabularies",id:"external-vocabularies",anchors:null},{title:"Extending JSON-LD context",id:"extending-jsonld-context",anchors:null},{title:"Data Providers",id:"data-providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:"Injecting the Serializer in an ItemDataProvider"},{id:"injecting-extensions-pagination-filter-eagerloading-etc",title:"Injecting Extensions (Pagination, Filter, EagerLoading etc.)"}]},{title:"Data Persisters",id:"data-persisters",anchors:[{id:"creating-a-custom-data-persister",title:"Creating a Custom Data Persister"}]},{title:"Identifiers",id:"identifiers",anchors:[{id:"custom-identifier-normalizer",title:"Custom identifier normalizer"},{id:"supported-identifiers",title:"Supported identifiers"}]},{title:"Extensions",id:"extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Example"}]},{title:"Security",id:"security",anchors:[{id:"configuring-the-access-control-message",title:"Configuring the Access Control Message"}]},{title:"Performance",id:"performance",anchors:[{id:"enabling-the-built-in-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{title:"Operation Path Naming",id:"operation-path-naming",anchors:[{id:"configuration-1",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Resolver"}]},{title:"Accept application/x-www-form-urlencoded Form Data",id:"form-data",anchors:[{id:"create-your-deserializelistener-decorator",title:"Create your DeserializeListener Decorator"},{id:"creating-the-service-definition",title:"Creating the Service Definition"}]},{title:"FOSUserBundle Integration",id:"fosuser-bundle",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:"Creating a User Entity with Serialization Groups"}]},{title:"JWT Authentication",id:"jwt",anchors:[{id:"installing-lexikjwtauthenticationbundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swaggeropen-api",title:"Documenting the Authentication Mechanism with Swagger/Open API"},{id:"testing-with-behat",title:"Testing with Behat"}]},{title:"NelmioApiDocBundle Integration",id:"nelmio-api-doc",anchors:null},{title:"AngularJS Integration",id:"angularjs-integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{title:"Swagger / Open API Support",id:"swagger",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger Documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"},{id:"changing-the-name-of-a-definition",title:"Changing the Name of a Definition"},{id:"changing-operations-in-the-swagger-documentation",title:"Changing Operations in the Swagger Documentation"},{id:"changing-the-swagger-ui-location",title:"Changing the Swagger UI Location"},{id:"using-the-swagger-command",title:"Using the Swagger Command"},{id:"overriding-the-ui-template",title:"Overriding the UI Template"}]},{title:"GraphQL Support",id:"graphql",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"},{id:"filters",title:"Filters"},{id:"security-access_control",title:"Security (access_control)"},{id:"serialization-groups-1",title:"Serialization Groups"}]},{title:"Handling Data Transfer Objects (DTOs)",id:"dto",anchors:[{id:"how-to-use-a-dto-for-writing",title:"How to Use a DTO for Writing"},{id:"how-to-use-a-dto-for-reading",title:"How to Use a DTO for Reading"}]},{title:"Handling File Upload",id:"file-upload",anchors:[{id:"installing-vichuploaderbundle",title:"Installing VichUploaderBundle"},{id:"configuring-the-entity-receiving-the-uploaded-file",title:"Configuring the Entity Receiving the Uploaded File"},{id:"handling-file-upload",title:"Handling File Upload"},{id:"making-a-request-to-the-media_objects-endpoint",title:"Making a Request to the /media_objects Endpoint"},{id:"linking-a-mediaobject-resource-to-another-resource",title:"Linking a MediaObject Resource to Another Resource"}]}]},{title:"The Schema Generator Component",path:"schema-generator",items:[{title:"The schema generator",id:"index",anchors:[{id:"what-is-schemaorg",title:"What is Schema.org?"},{id:"why-use-schemaorg-data-to-generate-a-php-model",title:"Why use Schema.org data to generate a PHP model?"},{id:"documentation",title:"Documentation"}]},{title:"Getting Started",id:"getting-started",anchors:[{id:"installation",title:"Installation"},{id:"model-scaffolding",title:"Model Scaffolding"},{id:"cardinality-extraction",title:"Cardinality Extraction"}]},{title:"Configuration",id:"configuration",anchors:[{id:"customizing-php-namespaces",title:"Customizing PHP Namespaces"},{id:"forcing-a-field-range",title:"Forcing a Field Range"},{id:"forcing-a-field-cardinality",title:"Forcing a Field Cardinality"},{id:"forcing-a-relation-table-name",title:"Forcing a Relation Table Name"},{id:"forcing-or-disabling-a-class-parent",title:"Forcing (or Disabling) a Class Parent"},{id:"forcing-a-class-to-be-abstract",title:"Forcing a Class to be Abstract"},{id:"forcing-a-nullable-property",title:"Forcing a Nullable Property"},{id:"forcing-a-unique-property",title:"Forcing a Unique Property"},{id:"making-a-property-read-only",title:"Making a Property Read Only"},{id:"making-a-property-write-only",title:"Making a Property Write Only"},{id:"forcing-a-property-to-be-in-a-serialization-group",title:"Forcing a Property to be in a Serialization Group"},{id:"forcing-an-embeddable-class-to-be-embedded",title:"Forcing an Embeddable Class to be Embedded"},{id:"author-phpdoc",title:"Author PHPDoc"},{id:"disabling-generators-and-creating-custom-ones",title:"Disabling Generators and Creating Custom Ones"},{id:"skipping-accessor-method-generation",title:"Skipping Accessor Method Generation"},{id:"disabling-the-id-generator",title:"Disabling the id Generator"},{id:"generating-uuids",title:"Generating UUIDs"},{id:"user-submitted-uuids",title:"User submitted UUIDs"},{id:"generating-custom-ids",title:"Generating Custom IDs"},{id:"disabling-usage-of-doctrine-collection",title:"Disabling Usage of Doctrine Collection"},{id:"changing-the-field-visibility",title:"Changing the Field Visibility"},{id:"generating-asserttype-annotations",title:"Generating @Assert\\Type Annotations"},{id:"forcing-doctrine-inheritance-mapping-annotation",title:"Forcing Doctrine Inheritance Mapping Annotation"},{id:"interfaces-and-doctrine-resolve-target-entity-listener",title:"Interfaces and Doctrine Resolve Target Entity Listener"},{id:"custom-schemas",title:"Custom Schemas"},{id:"checking-goodrelation-compatibility",title:"Checking GoodRelation Compatibility"},{id:"php-file-header",title:"PHP File Header"},{id:"full-configuration-reference",title:"Full Configuration Reference"}]}]},{title:"The Admin Component",path:"admin",items:[{title:"The API Platform Admin",id:"index",anchors:[{id:"features-1",title:"Features"}]},{title:"Getting Started",id:"getting-started",anchors:[{id:"installation-1",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{title:"Authentication Support",id:"authentication-support",anchors:null},{title:"Handling Relations to Collections",id:"handling-relations-to-collections",anchors:[{id:"customizing-a-property",title:"Customizing a Property"},{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]},{title:"The Client Generator Component",path:"client-generator",items:[{title:"The API Platform Client Generator",id:"index",anchors:[{id:"features-2",title:"Features"}]},{title:"React generator",id:"react",anchors:null},{title:"Vue.js generator",id:"vuejs",anchors:null},{title:"React Native generator",id:"react-native",anchors:[{id:"example-of-running--application-on-ios-simulator",title:"Example of running  application on IOS simulator"}]},{title:"Troubleshooting",id:"troubleshooting",anchors:null}]},{title:"Deployment",path:"deployment",items:[{title:"Deploying API Platform Applications",id:"index",anchors:null},{title:"Deploying to a Kubernetes Cluster",id:"kubernetes",anchors:[{id:"preparing-your-cluster-and-your-local-machine",title:"Preparing Your Cluster and Your Local Machine"},{id:"creating-and-publishing-the-docker-images",title:"Creating and Publishing the Docker Images"},{id:"deploying",title:"Deploying"},{id:"initializing-the-database",title:"Initializing the Database"},{id:"tiller-rbac-issue",title:"Tiller RBAC Issue"}]},{title:"Deploying an API Platform App on Heroku",id:"heroku",anchors:null}]},{title:"Extra",path:"extra",items:[{title:"The Release Process",id:"releases",anchors:null},{title:"API Platform's Philosophy",id:"philosophy",anchors:null},{title:"Troubleshooting",id:"troubleshooting",anchors:[{id:"using-docker",title:"Using Docker"},{id:"using-api-platform-and-jms-serializer-in-the-same-project",title:"Using API Platform and JMS Serializer in the same project"}]},{title:"Contribution guides",id:"contribution-guides",anchors:null},{title:"Contributor Code of Conduct",id:"conduct",anchors:null}]}]}},pathContext:{}}}});
//# sourceMappingURL=path---docs-c54c538857e325f376a9.js.map