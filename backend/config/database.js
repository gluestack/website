module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db-postgresql-strapi-59882-do-user-13064324-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', 'AVNS_s_GLy7COF3y4z5mUxfI'),
      ssl: {
        rejectUnauthorized: false,
        ca: '-----BEGIN CERTIFICATE-----MIIEQTCCAqmgAwIBAgIUTnzDhJ+84pRnB6SRM+Gp500/czswDQYJKoZIhvcNAQEMBQAwOjE4MDYGA1UEAwwvMDYwNWJkOTAtMjI4OC00YTUzLWFkZjItMzQwOTM4NWVlOWQ4IFByb2plY3QgQ0EwHhcNMjIxMjEyMDkxMzE5WhcNMzIxMjA5MDkxMzE5WjA6MTgwNgYDVQQDDC8wNjA1YmQ5MC0yMjg4LTRhNTMtYWRmMi0zNDA5Mzg1ZWU5ZDggUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAKmSRk6dmkneKgmBK2p5X1Xs0rx2H1FykDnnlEpFowolPVJCf9uInImRjEsv5jl0uWdOoyVtqi7U8BDegcyHxfWbNAJXtUH03c5HDZm3xEPPVgdFYr7de9nKjNUn23M7FRFLcHXVXHiOceb9q718lUPGPoE92PkPV6tBOlvK9YxHfPNSbeO9xhnm+P+wZJeKsfij27bYFScOEIHk8d2Ug6iCpcfSsBCV2GmfJQCAwAaWAUcR1SWtGVkguXDNuetoVrLdZw5vANQTuKffbMJuWr18ohExJvSU4SXY7vO7drLZhzrO6RcbgIE0vkJ9OojSqErGy76i7Zqprl4DLJ0LZWmDAskArb8zOa4l4N39hvvV75mR7sSLmTNaMvmtsksID4osbE0ZyP+Q95dS/cWKOrfzdFwbYkitpe9JgA8e0dimK4LAuTjUpC6UxCras95Vz2ktOGSrJz0cmuJPy7ZQcDEG/YzR0BBbAwKLChaO2IVruJPKNYrMv3uQScotIRu9SQIDAQABoz8wPTAdBgNVHQ4EFgQU9jSSXFKXTGKlAH1FD1TMJP0AuQYwDwYDVR0TBAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGzSyBdnBtdkrKM8FcydfGp5Qh8tfCJvESyNfJEsvImABI5obIwxMIwijlp7wYZ3SOmq8bLcgPyVJodTwJaUGA7iqg8u5xWaIKKiIPHvP+2TMbN+RaK0hxKqoahPcXmwKtkV6kHQkGwVmtWAAXxWAFyaF50mUh5i3wBoct/3qCA7KQhe5s8hcy6Rm9aGS2nTmh1AJCHBn+tm2KXSSmBVITpHAPb78DqseX3qoa6negbM8LQce+4JZfsNZSaRO8OwZM+mD1pMZQU/7PIVkZbPVY/5WXUW9xDvJi0SW+r5nWz3IhzQHpLgis6+gQlJC/qSezYekcPUlKfVjqhkUmFAG1AaaFe8I/v0VBLWaXyUFx6cBtHBBi3qseGi5iOxERT5fWMVxGyKC4H4RtgVN6e2H8XiPc/+JWeDSQg8bVHOvN+WC/ysWvUImlMcvVfoLzcloEQMl+xH+9sVRFexxXGQYs920/hrKchyeZaeaiKO3jG9xwk44uHsxFKap7UcYOrBTw==-----END CERTIFICATE-----'
      }, 

       },
       debug: false,

  },
});





