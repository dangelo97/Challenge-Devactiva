Feature: Automatizacion del inicio de sesion


    Scenario: Inicio de sesión exitoso con credenciales válidas
        Given Navego al sitio
        When Relleno el campo "UserName" con "Dange997"
        And Relleno el campo "Password" con "Local123#"
        And Hago click en el botón "Login"
        Then Valido que se inicio sesión con exito