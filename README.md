# GestionActivos-Uniminuto
Sistema de gestión de activos de la Rectoría Tolima y magdalena medio diseñado y desarrollado por DTSI Ibague

A continuación, se presentarán los requerimientos funcionales que se solicitan para la
elaboración de la herramienta, según la necesidad del proceso que desempeña la persona
encargada del proceso de activos fijos en la Rectoría:

  1. USUARIOS.
     Registrar usuarios.
     Actualizar registros de usuarios.
     Eliminar usuarios.
     Consultar usuarios.
     Roles de usuarios:
      - (Usuario administrador: permisos de modificación de toda la información).
      - (Usuario Administrativo: acceso a toda la información).
      - (Usuario de Operativo: para visualización de la información de los activos).
      - 
  2. REGISTRO DE ACTIVOS.
     Registrar clase de activos.
     Registrar denominación activos.
     No. Placa de activo fijo.
     Opción de Actualizar/modificar, eliminar, visualizar.

4. REGISTRAR LA ASIGNACIÓN.
   (Centro de Costo, Sede, dependencia/ área, nombre de la persona a cargo,
  número de identificación, fecha asignación, serial (si aplica), Adjuntar registro
  fotográfico del activo.)

5. REPORTES.
   Tipo de reportes
    - Reporte de cantidad de activos distribuido por clases
      Que contenga las siguientes columnas:
         Número de identificación de activo fijo
         Nombre de activo fijo
         Serial del activo (si aplica)
         Clase
    - Reporte de activo totalmente desvalorizados
      Que contenga las siguientes columnas:
         Número de identificación de activo fijo
         Nombre de activo de activo fijo
         Valor de adquisición de activo
         Valor de depreciación del activo
         Valor actual del activo
    - Reporte de asignación de activos fijo
      Que contenga las siguientes columnas:
         Número de identificación de activo fijo
         Nombre de activo fijo
         Estado físico del activo fijo
         Nombre de la persona a cargo
         Número de Identificación de persona cargo
         Dependencia / área
    - Reporte de activos fijos por centro de Operación Académica
      Que contenga las siguientes columnas:
         Número de identificación de activos fijo
         Nombre de activo fijo
         Nombre del Centro de Operación
         Rectoría
    - Reporte de activos de control
      Que contenga las siguientes columnas:
         Número de identificación de activo
         Nombre de activo
         Nombre de persona a cargo del activo
         Número de identificación de la persona a cargo
         Dependencia / área
         Centro de Operación
      
  6. INICIO DE SESIÓN
         Número de documento y contraseña
         Cerrar sesión por inactividad
         Cerrar sesión voluntaria
  7. MOVIMIENTO DE ACTIVOS CON ALARMA DE ENTREGA.
         Información del activo (Nombre activo y No. De placa)
         Nombre persona que entrega
         Nombre persona que recibe
         Fecha de salida del activo
         Fecha de ingreso del activo
         Alerta de activo no entregado
