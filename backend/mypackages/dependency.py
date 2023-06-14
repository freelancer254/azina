
from fastapi import HTTPException, status
from mypackage import  crud
from deta import Deta


#Dependency - to avail DB
def get_db():
    try:
        deta = Deta ()
        db = deta.Base('bitkopaDB')
        return db
    except:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        detail = "Opps, something went wrong, kindly try again later")
